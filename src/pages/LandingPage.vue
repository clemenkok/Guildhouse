<template>
    <div class="min-h-screen bg-white flex flex-col">
      <!-- Navigation / Header -->
      <header class="w-full py-4 bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <!-- Logo / Brand Name -->
          <div class="flex items-center space-x-2">
            <!-- Replace with your own logo if needed -->
            <img 
              src="/Users/clemenkok/guildhouse/src/assets/game.png" 
              alt="Guildhouse Logo" 
              class="h-10 w-10 rounded-full"
            />
            <h1 class="font-bold text-xl text-gray-800">Guildhouse</h1>
          </div>
  
          <!-- Navigation Links / Buttons -->
          <div class="hidden md:flex items-center space-x-6">
            <a href="#features" class="text-gray-600 hover:text-gray-800">Features</a>
            <a href="#startups" class="text-gray-600 hover:text-gray-800">Startups</a>
            <a href="#organizations" class="text-gray-600 hover:text-gray-800">Organizations</a>
            <button 

  @click="$router.push('/waitlist')"
              class="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="flex-grow flex flex-col justify-center items-center text-center px-4 py-16 bg-blue-50">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Market Intelligence and Discovery, Powered by Machine Learning
          </h2>
          <p class="mt-4 text-gray-700 text-lg md:text-xl">
            Connect organizations with innovative startups to solve real-world challenges.
          </p>
          <div class="mt-8">
            <button 
            @click="$router.push('/waitlist')"
              class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
            >
              Join Guildhouse
            </button>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section id="features" class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">Why Guildhouse?</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="p-6 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">Intelligent Discovery</h4>
              <p class="text-gray-600">
                Our machine learning engine scours proprietary datasets to surface new ventures that 
                meet your organization’s specific needs.
              </p>
            </div>
            <!-- Feature 2 -->
            <div class="p-6 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">Natural Language Insights</h4>
              <p class="text-gray-600">
                Use our powerful NLP-based search tool to quickly identify top emerging startups 
                and discover innovative solutions.
              </p>
            </div>
            <!-- Feature 3 -->
            <div class="p-6 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">End-to-End Collaboration</h4>
              <p class="text-gray-600">
                From listing challenges to receiving pitch decks, manage your entire innovation 
                workflow within Guildhouse.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- For Startups Section -->
      <section id="startups" class="py-12 bg-blue-50">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">For Startups</h3>
          <p class="text-gray-700 max-w-2xl mx-auto mb-6">
            Pitch your ideas directly to organizations actively seeking innovative solutions. 
            Reach decision-makers faster and get your venture noticed.
          </p>
          <button 
            @click="$router.push('/waitlist')"
            class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
          >
            Share Your Pitch Deck
          </button>
        </div>
      </section>
  
      <!-- For Organizations Section -->
      <section id="organizations" class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">For Organizations</h3>
          <p class="text-gray-700 max-w-2xl mx-auto mb-6">
            Post innovation challenges and instantly access a tailored list of promising startups. 
            Leverage our data-driven approach to discover potential partners.
          </p>
          <button 
            @click="$router.push('/waitlist')"
            class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
          >
            List a Challenge
          </button>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div class="max-w-7xl mx-auto px-4">
          <h3 class="text-3xl font-bold mb-4">Ready to transform your innovation strategy?</h3>
          <p class="mb-8">
            Sign up for Guildhouse and start exploring new opportunities for growth and success.
          </p>
          <button 
            @click="$router.push('/waitlist')"
            class="px-6 py-3 rounded-md bg-white text-blue-700 font-semibold hover:shadow-lg transition"
          >
            Get Started
          </button>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-gray-300 py-6">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2024 Guildhouse. All rights reserved.</p>
          <div class="mt-4 md:mt-0 flex space-x-4">
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
  };
  </script>
  
  <style scoped>
  /* You can add any additional custom styling here if needed */
  </style>
  