export interface Project {
  title: string;
  external: string;
  github: string;
  descriptionHtml: string;
  techs: string[];
}

const projects: Project[] = [
  {
    title: 'Circle detection',
    external: '',
    github: 'https://github.com/DarioCabas/OPENCV_and_Arduino-Circle-Detection',
    descriptionHtml:
      "This is a short description about the content of my proyect. In this project I detect circle objects using OPENCV and then I connected an arduino to send some data trought serial and move a servomotor when I detected a circle. This project could be more elaborated to recognize the radius of a cricle and clasificated a specific circle.",
    techs: ['Python', 'OPENCV', 'Arduino'],
  },
  {
    title: 'Two wheel robot in ros',
    external: '',
    github: 'https://github.com/DarioCabas/2wheel_robot',
    descriptionHtml:
      'This is a short description about the content of my proyect. In this project I create a robot with ROS, we use a URDF model to construct our robot and uses the xacro files for more structure code of the robot in a different files. So in this present project you can see a robot based in two wheels and a caster front that can visualize en RVIZ that is a tool for visualization.',
    techs: ['CMake', 'ROS', 'RVIZ'],
  },
  {
    title: 'Web interface for ROS',
    external: '',
    github: 'https://github.com/DarioCabas/ROS_Webpage',
    descriptionHtml: 'This is a short description about the content of my proyect. In this project I create an interface using a web page trough HyperText Markup Language (HTML) and using some basic communication between the page and the robot that I made in RVIZ that is a 3D visualization tool for ROS. The objetive is control a two wheeled robot with the page web interface.',
    techs: ['html', 'css', 'javascript', 'ROS'],
  },
  {
    title: 'Template for an email',
    external: '',
    github: 'https://github.com/DarioCabas/TEMPLATE_EMAIL',
    descriptionHtml: 'This is a short description about the content of my proyect. In this project I create a template that you can send in an e-mail.This template was created using HMTL and CSS also this template is responsive with your screen of your devices.',
    techs: ['html', 'css'],
  },
];

export default projects;
