### Introduction

#### Overview of the Process
Here’s a high-level overview of what we’ll be doing:
1. **Set Up Your Domain in Namecheap:** Configure your domain to point to Vercel’s servers, allowing Vercel to manage your DNS settings, including wildcard subdomains.
2. **Configure Vercel for Dynamic Subdomains:** Ensure that Vercel is set up to handle wildcard subdomains, directing traffic to the appropriate sections of your Nuxt 3 application.
3. **Configure Nuxt 3 for Dynamic Routing:** Set up your Nuxt 3 application to handle the routing logic based on the subdomain being accessed.

---

### Step 1: Set Up Your Domain in Namecheap

**Objective:** Configure Namecheap to direct your domain (e.g., `docket.tv`) to Vercel, and allow Vercel to manage DNS records, including wildcard subdomains.

#### Actionable Tasks:
1. **Log in to Namecheap:**
   - Go to [Namecheap](https://www.namecheap.com) and log into your account.

2. **Navigate to the Domain List:**
   - Once logged in, click on the "Domain List" tab on the left sidebar to view your purchased domains.

3. **Select Your Domain (docket.tv):**
   - Find `docket.tv` in your list of domains and click the "Manage" button next to it.

4. **Update the DNS Settings:**
   - Scroll down to the "Nameservers" section.
   - Select "Custom DNS" from the dropdown menu.
   - Enter Vercel’s nameservers:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
   - Save your changes.

5. **Set Up Wildcard Subdomain:**
   - In the same DNS management page, scroll down to the "Advanced DNS" tab.
   - Add a new CNAME record:
     - **Type:** CNAME
     - **Host:** `*`
     - **Value:** `cname.vercel-dns.com`
     - **TTL:** Automatic
   - This wildcard subdomain setup will allow any subdomain (like `${broadcaster_name}.docket.tv`) to be handled by Vercel.

**Check-in:** Ensure that these steps are completed and valid before moving to the next step. If you encounter any issues, recheck the settings or consult Namecheap’s support.

---

### Step 2: Configure Vercel for Dynamic Subdomains

**Objective:** Set up Vercel to manage dynamic subdomains, allowing traffic to be routed correctly based on the subdomain used.

#### Actionable Tasks:
1. **Check for Wildcard Support:**
   - Since you’ve added `*.docket.tv` as a wildcard domain in Vercel, Vercel can now handle any subdomain directed to it.

2. **Set Up Environment Variables (if needed):**
   - If your Nuxt 3 app needs to be aware of which subdomain is being accessed, you might need to pass this information as an environment variable in Vercel.

3. **Test the Wildcard Subdomain:**
   - Deploy your application to Vercel and test if different subdomains route correctly to your app.
   - Visit `broadcaster.docket.tv` and ensure that it reaches the intended part of your application.

**Check-in:** Ensure the wildcard domain works correctly with your Vercel configuration. Make sure any specific subdomains (e.g., `api.docket.tv`) are still functioning as expected.

---

### Step 3: Configure Your Nuxt 3 App for Dynamic Subdomains

**Objective:** Configure your Nuxt 3 application to recognize and appropriately handle requests based on the subdomain accessed.

#### Actionable Tasks:
1. **Create Middleware to Handle Subdomains:**
   - Create a middleware file, for example, `middleware/subdomain.js` in your Nuxt 3 project.
   - This file should extract the subdomain from the request’s host header and perform necessary actions (e.g., loading specific data based on the subdomain).

   Here’s an example in JavaScript:
   ```javascript
   export default defineNuxtRouteMiddleware((to, from) => {
     const host = process.server
       ? useRequestHeaders().host
       : window.location.host;

     const parts = host.split('.');
     const subdomain = parts.length > 2 ? parts[0] : null;

     if (subdomain) {
       console.log(`Subdomain: ${subdomain}`);
       // Load specific data or redirect based on subdomain
     }
   });
   ```

2. **Adjust for Local Testing:**
   - Modify your middleware to account for testing on localhost by checking if the host includes `localhost` and adjusting the subdomain logic accordingly.

3. **Integrate Middleware:**
   - In your `nuxt.config.js`, ensure this middleware runs globally by adding it to the router middleware section.

4. **Test the Configuration:**
   - Run your Nuxt app locally or deploy to Vercel and test with various subdomains to ensure routing works as expected.

**Check-in:** Ensure your middleware correctly handles subdomains and routes to the appropriate content. If issues arise, revisit the logic or consult the Nuxt 3 documentation.

---

### Conclusion

By following these steps, you’ve successfully set up dynamic subdomains for your Nuxt 3 application on Vercel, using a domain from Namecheap. This configuration will allow you to manage both public streams and a broadcaster admin CMS on separate subdomains, providing a seamless user experience.

If you have further questions or need assistance with additional configurations, feel free to reach out!
