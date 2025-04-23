"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon, ChevronDownIcon } from "lucide-react"
import { testimonialsData } from "@/lib/data"

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(6)

  const loadMoreTestimonials = () => {
    setVisibleTestimonials((prev) => prev + 6)
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="testimonials" className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[40%] left-[20%] h-[20rem] w-[20rem] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <Badge className="bg-purple-600 hover:bg-purple-700">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Feedback from colleagues and clients I've had the pleasure to work with
            </p>
          </motion.div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.slice(0, visibleTestimonials).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-purple-100 transition-all duration-300 hover:border-purple-300 hover:shadow-md dark:border-purple-900/50 hover:dark:border-purple-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <QuoteIcon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">{testimonial.quote}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {visibleTestimonials < testimonialsData.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <Button onClick={loadMoreTestimonials} variant="outline" className="gap-2" size="lg">
                See More Testimonials
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
