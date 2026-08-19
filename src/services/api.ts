import { profileData, aboutData, skillsData, experienceData, projectsData } from "./data";

export async function getProfile() {
  return profileData;
}

export async function getAbout() {
  return aboutData;
}

export async function getSkills() {
  return skillsData;
}

export async function getExperience() {
  return experienceData;
}

export async function getProjects() {
  return projectsData;
}

