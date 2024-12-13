interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "iOS",
    description: "Mi preferida, desarrollo Nativo para apps complejas y con buen rendimiento, desarrollo con Swift y SwiftUI, pero tambien librerias con Objective-C y layouts con UIKit.",
    icon: "apple"
  },
  {
    name: "Android",
    description: "Mis inicios, desarrollo Nativo para apps complejas y con buen rendimiento, desarrollo con Java y Kotlin, layouts con XML y Jetpack Compose en ambito de investigación.",
    icon: "android"
  },
  {
    name: "Flutter",
    description: "La tecnologia que me permite desarrollar aplicaciones para iOS y Android con un solo codigo para aplicaciones sencillas.",
    icon: "flutter"
  },
  {
    name: "visionOS",
    description: "El futuro del desarrollo, aplicaciónes espaciales en XR desarrolladas nativamente con Swift, SwiftUI y RealityKit.",
    icon: "vision-pro"
  },
];

export default hardSkills; 