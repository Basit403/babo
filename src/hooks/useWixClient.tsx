"use client"

import { wixClientContext } from "@/app/context/wixContext";
import { useContext } from "react";

export const usewixClient = () => {
    return useContext(wixClientContext);
}