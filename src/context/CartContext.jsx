"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { products } from "@/lib/site";

const CartContext = createContext(null);
const STORAGE_KEY = "soleaura-cart-v1";

function toQuantity(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 1;
  return Math.max(1, Math.min(99, Math.floor(number)));
}

function sanitizeCart(rawCart) {
  if (!Array.isArray(rawCart)) return [];

  const validProductIds = new Set(products.map((product) => product.id));
  const merged = new Map();

  rawCart.forEach((item) => {
    const id = Number(item?.id);
    if (!validProductIds.has(id)) return;
    const current = merged.get(id) || 0;
    merged.set(id, Math.min(99, current + toQuantity(item?.quantity)));
  });

  return Array.from(merged, ([id, quantity]) => ({ id, quantity }));
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        setCart(sanitizeCart(JSON.parse(savedCart)));
      }
    } catch {
      setCart([]);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const addToCart = useCallback((productOrId, quantity = 1) => {
    const id = Number(typeof productOrId === "object" ? productOrId?.id : productOrId);
    const productExists = products.some((product) => product.id === id);
    if (!productExists) return;

    setCart((currentCart) => {
      const requestedQuantity = toQuantity(quantity);
      const existing = currentCart.find((item) => item.id === id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === id ? { ...item, quantity: Math.min(99, item.quantity + requestedQuantity) } : item
        );
      }

      return [...currentCart, { id, quantity: requestedQuantity }];
    });
  }, []);

  const setQuantity = useCallback((id, quantity) => {
    const safeId = Number(id);
    const safeQuantity = toQuantity(quantity);
    setCart((currentCart) =>
      currentCart.map((item) => (item.id === safeId ? { ...item, quantity: safeQuantity } : item))
    );
  }, []);

  const increaseQuantity = useCallback((id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === Number(id) ? { ...item, quantity: Math.min(99, item.quantity + 1) } : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === Number(id) ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== Number(id)));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const value = useMemo(() => {
    const items = cart
      .map((cartItem) => {
        const product = products.find((item) => item.id === cartItem.id);
        if (!product) return null;
        return {
          ...product,
          quantity: cartItem.quantity,
          lineTotal: product.price * cartItem.quantity,
        };
      })
      .filter(Boolean);

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
    const delivery = subtotal === 0 || subtotal >= 150 ? 0 : 12;
    const total = subtotal + delivery;

    return {
      ready,
      cart,
      items,
      itemCount,
      subtotal,
      delivery,
      total,
      addToCart,
      setQuantity,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
    };
  }, [addToCart, cart, clearCart, decreaseQuantity, increaseQuantity, ready, removeFromCart, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
