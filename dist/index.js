"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const client_1 = require("@prisma/client");
//import { PrismaClient } from "../generated/prisma/client";
const prisma = new client_1.PrismaClient();
const app = new hono_1.Hono();
app.get("/", (c) => c.text("Hello World!"));
app.get("/about", (c) => {
    return c.json({
        massage: "Ruksita Panya"
    });
});
app.get("/profile", async (c) => {
    const profile = await prisma.profile.findMany();
    return c.json(profile);
});
exports.default = app;
