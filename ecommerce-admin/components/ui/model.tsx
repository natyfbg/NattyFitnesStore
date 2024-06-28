"use client";

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "./dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface Modalprops {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Modal: React.FC<Modalprops> = ({ title, description, isOpen, onClose, children }) => {
    const onChange = (open: boolean) => {
        if (open) {
            onClose();
    }
};

    return (
        <Dialog open = {isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )};