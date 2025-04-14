"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { skillsCategories } from "@/data/portfolio-data"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id)

  const currentCategory = skillsCategories.find((category) => category.id === activeCategory)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-10"
    >
      <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>

      {/* Skills Navigation */}
      <div className="relative mb-8">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex space-x-2">
            {skillsCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "flex items-center gap-2 whitespace-nowrap transition-all",
                    activeCategory === category.id
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "hover:text-purple-600 hover:border-purple-600",
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-border -mx-4 sm:mx-0"></div>
      </div>

      {/* Skills Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 border-purple-500/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4">
                {currentCategory?.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15, // Stagger the animations
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                      <div className="relative w-full h-full">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          fill
                          className="p-1 object-contain"
                        />
                      </div>
                    </div>
                    <span className="mt-3 text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
