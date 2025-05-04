<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { projects } from '../data/projects';

const projectsList = ref(projects);
</script>

<template>
  <div class="container mx-auto py-12 px-4">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold mb-4">My Side Projects</h1>
      <p class="text-gray-500 max-w-2xl mx-auto">
        A collection of personal projects I've worked on. Each project represents a learning journey and a chance to
        explore new technologies.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projectsList"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>
