import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const CONTACT_EMAIL =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? "hello@alexdev.io";

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.message("EmailJS not configured", {
        description:
          "Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to enable sending.",
      });
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: parsed.data.name,
          email: parsed.data.email,
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          user_name: parsed.data.name,
          user_email: parsed.data.email,
          reply_to: parsed.data.email,
          to_name: "Roshan Yadav",
          to_email: CONTACT_EMAIL,
          message: parsed.data.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      const message =
        error && typeof error === "object" && "text" in error
          ? String(error.text)
          : "Please check your EmailJS template settings.";
      console.error("EmailJS send failed:", error);
      toast.error("Failed to send message", {
        description: message,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-6 lg:px-10 py-32 border-t border-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary">
            // Contact
          </p>
          <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tighter leading-[0.95]">
            LET'S BUILD
            <br />
            <span className="text-gradient">SOMETHING.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md text-pretty">
            Have a project in mind or just want to say hello? My inbox is always
            open and I reply within 24 hours.
          </p>

          <div className="space-y-4 pt-4">
            <a
              // href="mailto:hello@alexdev.io"
              // href="mailto:rosh45644@gmail.com"
              href="mailto:whoezroshan@gmail.com"

              className="flex items-center gap-4 group"
            >
              <div className="size-10 grid place-items-center rounded-xl border border-border bg-card group-hover:border-primary group-hover:text-primary transition-colors">
                <Mail className="size-4" />
              </div>
              <span className="font-medium">whoezroshan@gmail.com</span>
            </a>
            <div className="flex items-center gap-4">
              <div className="size-10 grid place-items-center rounded-xl border border-border bg-card">
                <MapPin className="size-4" />
              </div>
              <span className="text-muted-foreground">Jhapa, Nepal</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {[
              { Icon: Github, href: "https://github.com/Roshan632", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/in/roshanyadav632", label: "LinkedIn" },
              { Icon: Twitter, href: "https://x.com/roshancodexx", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-11 grid place-items-center rounded-xl border border-border bg-card hover:border-primary hover:text-primary transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative bg-card border border-border rounded-3xl p-8 space-y-5"
        >
          <div
            aria-hidden
            className="absolute -inset-px rounded-3xl opacity-30 blur-2xl -z-10"
            style={{ background: "var(--gradient-accent)" }}
          />
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              name="name"
              required
              maxLength={100}
              placeholder="Your full name"
              className="w-full bg-background border border-border rounded-xl h-12 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="you@company.com"
              className="w-full bg-background border border-border rounded-xl h-12 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              maxLength={2000}
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-background border border-border rounded-xl p-4 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:glow-cyan transition-all disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
