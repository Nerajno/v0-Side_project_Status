<script setup lang="ts">
import { Calendar, Clock } from 'lucide-vue-next';

interface Props {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    status: "Completed" | "In Progress" | "On Hold" | "Abandoned";
    learnings: string[];
    dateStarted: Date;
    dateEnded?: Date | null;
    imageUrl: string;
  }
}

const props = defineProps<Props>();

// Function to get status badge color
const getStatusColor = (status: Props['project']['status']): string => {
  switch (status) {
    case "Completed":
      return "bg-green-500 hover:bg-green-600";
    case "In Progress":
      return "bg-blue-500 hover:bg-blue-600";
    case "On Hold":
      return "bg-amber-500 hover:bg-amber-600";
    case "Abandoned":
      return "bg-gray-500 hover:bg-gray-600";
    default:
      return "bg-slate-500 hover:bg-slate-600";
  }
};

// Format date function
const formatDate = (date: Date | null | undefined): string => {
  if (!date) return "Present";
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};

// Calculate project duration in months
const calculateDuration = (start: Date, end: Date | null | undefined): string => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                       (endDate.getMonth() - startDate.getMonth());

  if (diffInMonths < 1) {
    const diffInDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''}`;
  }

  return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''}`;
};
</script>

<template>
  <div class="bg-white rounded-lg border shadow-sm flex flex-col h-full transition-all duration-300 hover:shadow-md overflow-hidden">
    <!-- Project Image -->
    <div class="aspect-video w-full overflow-hidden">
      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Card Header -->
    <div class="p-6 pb-4 border-b">
      <div class="flex justify-between items-start">
        <h2 class="text-xl font-semibold">{{ project.title }}</h2>
        <span
          :class="[getStatusColor(project.status), 'text-white text-xs font-medium px-2.5 py-0.5 rounded']"
        >
          {{ project.status }}
        </span>
      </div>
      <p class="text-gray-500 mt-2">{{ project.description }}</p>

      <!-- Project Timeline -->
      <div class="mt-3 flex items-center text-sm text-gray-500">
        <span class="flex items-center">
          <Calendar class="h-4 w-4 mr-1" />
          {{ formatDate(project.dateStarted) }} - {{ formatDate(project.dateEnded) }}
          <span class="ml-2 flex items-center text-xs bg-gray-100 px-2 py-0.5 rounded">
            <Clock class="h-3 w-3 mr-1" />
            {{ calculateDuration(project.dateStarted, project.dateEnded) }}
          </span>
        </span>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-6 flex-grow">
      <div class="mb-6">
        <h3 class="text-sm font-medium mb-2">Technologies</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded border transition-colors duration-200 hover:bg-gray-200"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-medium mb-2">Learnings</h3>
        <ul class="list-disc pl-5 text-sm text-gray-500 space-y-1">
          <li v-for="(learning, index) in project.learnings" :key="index">
            {{ learning }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Card Footer -->
    <div class="p-6 pt-4 border-t">
      <div class="text-sm text-gray-500">Last updated: {{ new Date().toLocaleDateString() }}</div>
    </div>
  </div>
</template>
