<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>{{ brand.appName }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <FormPage />
    </v-main>

    <v-footer class="app-footer">
      <div class="footer-content">
        &copy; {{ new Date().getFullYear() }} —
        <a :href="brand.companyUrl" target="_blank" rel="noopener noreferrer" class="footer-link">{{ brand.companyName }}</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import FormPage from '@/components/FormPage.vue'
import { brand } from '@/config/branding'
</script>

<style>
/* Vuetify 4 removed browser CSS reset — add targeted resets */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
p, ul, ol {
  margin: 0;
  padding: 0;
}

/* Footer */
.app-footer {
  background-color: #f1f3f5 !important;
  padding: 0 !important;
  border-top: 1px solid #e0e0e0;
  min-height: unset !important;
  height: auto !important;
  flex: 0 0 auto !important;
}

.footer-content {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0.4rem 1rem;
  font-size: 0.75rem;
  color: #6c757d;
}

.footer-link {
  color: #6c757d;
  text-decoration: none;
  font-weight: 600;
}

.footer-link:hover {
  text-decoration: underline;
  color: #495057;
}

/* VJSF form overrides — secondary color accent on list items (mirrors complete-app pattern) */
.v-form .v-list-item {
  border-bottom: 2px solid rgb(var(--v-theme-secondary)) !important;
}

/* Vuetify 4 does not automatically color error messages — force error theme color */
.v-input--error .v-messages__message {
  color: rgb(var(--v-theme-error)) !important;
}

/* Section-level validation alert: accent border matching field errors */
.vjsf-node .v-alert--type-error {
  border-left: 4px solid rgb(var(--v-theme-error)) !important;
}
</style>
