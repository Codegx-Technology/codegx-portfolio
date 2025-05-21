import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body using Zod schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        position: validatedData.position,
        subject: validatedData.subject,
        message: validatedData.message
      });
      
      res.status(201).json({
        message: "Contact message received successfully",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact messages (for administrative purposes)
  app.get("/api/contact/messages", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json({
        data: messages
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Mark a contact message as read
  app.patch("/api/contact/messages/:id/read", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid message ID" });
      }
      
      const updatedMessage = await storage.markContactMessageAsRead(id);
      
      if (!updatedMessage) {
        return res.status(404).json({ message: "Message not found" });
      }
      
      res.status(200).json({
        message: "Message marked as read",
        data: updatedMessage
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
