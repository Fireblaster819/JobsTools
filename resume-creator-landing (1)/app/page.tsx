import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function ResumeCreatorLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full"
      >
        <Card className="rounded-2xl shadow-xl p-8 text-center">
          <CardContent>
            <div className="mb-6">
              <Image
                src="/images/job-search.png"
                alt="Job Search Illustration"
                width={400}
                height={200}
                className="mx-auto rounded-lg"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Build Your Resume in Minutes</h1>
            <p className="text-gray-600 mb-6 text-lg">
              Want to learn more about our resume creator? Reach out and we’ll guide you to your next job opportunity.
            </p>
            <Button className="text-lg px-6 py-3" size="lg">
              Contact Us
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
