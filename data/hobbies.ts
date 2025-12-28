// Hobbies and Extra-Curriculars data
// To add a new hobby/activity:
// 1. Add a new object to the hobbies array below
// 2. Add corresponding details to hobbyDetails in app/hobbies/[id]/page.tsx (if you want detail pages)

export interface Hobby {
  id: string
  title: string
  techStack: string[]
  image: string
  imageAlt?: string
}

export const hobbies: Hobby[] = [
  // Add your hobbies and extra-curriculars here
  // Example structure:
  // {
  //   id: 'hobby-1',
  //   title: 'Hobby Title',
  //   techStack: ['Skill1', 'Skill2'],
  //   image: '/hobby-image.png',
  //   imageAlt: 'Hobby description'
  // },
]

