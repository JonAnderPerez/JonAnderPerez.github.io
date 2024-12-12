interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "iOS",
    description: "La tecnologia en la que quiere expecializarme, desarrollo con Swift y SwiftUI, pero tambien con Objective-C y UIKit",
    icon: "apple"
  },
  {
    name: "Android",
    description: "Los dispositivos con los que empece en mobile, desarrollo con Java y Kotlin",
    icon: "android"
  },
  {
    name: "Flutter",
    description: "La tecnologia que me permite desarrollar aplicaciones para iOS y Android con un solo codigo",
    icon: "flutter"
  }
];

export default hardSkills;