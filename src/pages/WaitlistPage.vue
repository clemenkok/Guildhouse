<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <!-- Header / Minimal Branding -->
    <header class="mt-8 mb-4 text-center">
      <h1 class="text-3xl font-bold text-gray-800">Guildhouse Waitlist</h1>
      <p class="text-gray-700 mt-2">
        Be the first to access our intelligent platform connecting organizations and startups.
      </p>
    </header>

    <!-- Waitlist Form -->
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
        >
          Join Waitlist
        </button>
      </form>
    </div>

    <!-- Thank-You / Confirmation Message -->
    <div
      v-if="showConfirmation"
      class="mt-6 text-center bg-green-50 border border-green-200 text-green-600 rounded-md p-4 w-full max-w-md"
    >
      Thanks for signing up! We'll keep you updated.
    </div>

    <!-- Alert Banner -->
    <div
      v-if="showAlert"
      class="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center py-4"
    >
      Submitted
    </div>

    <!-- Footer -->
    <footer class="mt-8 mb-4 text-gray-500">
      <p class="text-center text-sm">&copy; 2024 Guildhouse</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "WaitlistPage",
  data() {
    return {
      email: "",
      showConfirmation: false,
      showAlert: false,
    };
  },
  methods: {
    handleSubmit() {
      // Here you can integrate with your back-end or a service like Mailchimp, etc.
      // For now, we’ll just show a confirmation message.
      // If you have an API, you might do something like:
      // await axios.post('/api/waitlist', { email: this.email });
      
      this.showConfirmation = true;
      this.email = ""; // Reset the form

      // Show alert banner
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000); // Hide after 3 seconds
    },
  },
};
</script>

<style scoped>
/* Add any additional or custom styling here if needed. */
</style>