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
      'Detects circular objects using OpenCV and connects to an Arduino via serial communication to move a servomotor upon detection.',
    techs: ['Python', 'OpenCV', 'Arduino'],
  },
  {
    title: 'Two-Wheel Robot in ROS',
    github: 'https://github.com/DarioCabas/2wheel_robot',
    external: '',
    description:
      'Two-wheeled robot built with ROS using URDF/Xacro models, visualized in RVIZ with a caster wheel for balance.',
    techs: ['CMake', 'ROS', 'RVIZ'],
  },
  {
    title: 'Web Interface for ROS',
    github: 'https://github.com/DarioCabas/ROS_Webpage',
    external: '',
    description:
      'Browser-based control interface for a two-wheeled ROS robot, enabling real-time control via standard web technologies.',
    techs: ['HTML', 'CSS', 'JavaScript', 'ROS'],
  },
  {
    title: 'Email Template',
    github: 'https://github.com/DarioCabas/TEMPLATE_EMAIL',
    external: '',
    description:
      'Responsive HTML/CSS email template compatible across major email clients and devices.',
    techs: ['HTML', 'CSS'],
  },
];

export default projects;
