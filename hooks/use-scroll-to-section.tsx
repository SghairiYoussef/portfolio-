"use client"

export function scrollToSection(sectionId: string) {
  // Remove the # if it's included
  const targetId = sectionId.replace("#", "")
  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    // Smooth scroll to the element
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset for header height
      behavior: "smooth",
    })

    // Update URL without page reload
    window.history.pushState(null, "", `#${targetId}`)
  }
}
