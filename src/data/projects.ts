export interface Project {
  title: string;
  description: string;
  github: string;
  external: string;
  techs: string[];
}

const projects: Project[] = [
  {
    title: 'Circle Detection',
    github: 'https://github.com/DarioCabas/OPENCV_and_Arduino-Circle-Detection',
    external: '',
    description:
      'Spots circular objects with OpenCV and signals an Arduino over serial to move a servomotor.',
    techs: ['Python', 'OpenCV', 'Arduino'],
  },
  {
    title: 'Two-Wheel Robot in ROS',
    github: 'https://github.com/DarioCabas/2wheel_robot',
    external: '',
    description:
      'URDF/Xacro model with a caster wheel for balance, visualized in RVIZ.',
    techs: ['CMake', 'ROS', 'RVIZ'],
  },
  {
    title: 'Web Interface for ROS',
    github: 'https://github.com/DarioCabas/ROS_Webpage',
    external: '',
    description:
      'Controls the two-wheeled robot in real time from the browser.',
    techs: ['HTML', 'CSS', 'JavaScript', 'ROS'],
  },
  {
    title: 'Email Template',
    github: 'https://github.com/DarioCabas/TEMPLATE_EMAIL',
    external: '',
    description:
      'Responsive layout that renders consistently across major email clients.',
    techs: ['HTML', 'CSS'],
  },
];

export default projects;
