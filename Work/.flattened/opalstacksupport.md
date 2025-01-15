### Hi Sean,

Hi Sean,

Thank you for your swift response and for the updates that have restored our site! I've noted your suggestion regarding Memcached as an alternative to Redis. Memcached does seem like a more straightforward option, and I'll definitely be exploring it further. Your assistance has been invaluable. We really appreciate your prompt and effective support—it's greatly appreciated!

Warm regards,
Trent Brew
Lead Developer
Gumbo Media LLC


### Hi Trent,

You're encountering this issue because you're attempting to use a Redis object cache without a running Redis instance. To use a Redis object cache, please follow these steps:

1. **Create a Nginx proxy port app** at [Opalstack Apps](https://my.opalstack.com/apps/) to reserve a port number for Redis.
2. **Create your own `redis.conf` file** using your assigned port for Redis.
3. **Start Redis** using the command below as your app's shell user:
   ```
   scl enable rh-redis5 -- redis-server $HOME/redis.conf
   ```
4. **Configure your WordPress Redis plugin** to connect to Redis on your assigned port.

Alternatively, if the configuration seems complex, consider using **Memcached** for your object cache as described in [Speed up WordPress with Memcached](https://example.com).

In the meantime, I have renamed the file `/home/umojacorp2021/apps/umoja2021/wp-content/object-cache.php` to disable the currently broken object cache, and the site is now operational.

Hope this helps! Please let me know if I can assist you further, and thank you for using Opalstack 😊

---
**Sean from Opalstack**

#### How was my response today?
- **Rating: Good**
- **Rating: Okay**
- **Rating: Not Bad**

**Trent Brew**
support@opalstack.com

**CC:**
Matthew Manning;
Kelly Yacono <kelly@newroot.org>

#### Here are the aforementioned screenshots for reference:
Opalstack Support<support@opalstack.com>

---

### Hi,

Message received! Your case number is: 220001.
We'll get back to you as soon as possible!

❤️,
The Opalstack Team

**Trent Brew**
support@opalstack.com

**CC:**
Matthew Manning;
Kelly Yacono <kelly@newroot.org>

---

### Dear OpalStack Support,

I hope this message finds you well. I’m reaching out to report that our client’s WordPress site, [newroot.org](https://newroot.org), hosted on opal4.opalstack.com, has been down since yesterday (09-17-2024 around 7 AM CST) and remains inaccessible.

#### Here are the specific issues we are encountering:
- The site itself is down ([screenshot attached: figure 1](https://newroot.org)).
- We are unable to access the WordPress admin dashboard ([screenshot attached: figure 2](https://newroot.org/wp-admin)).
- Both pages are showing errors related to Redis (more details in the screenshots).

This has been an ongoing issue for over 24 hours, and I would appreciate your assistance in diagnosing and resolving it. As a point of reference, we noticed several outages with server 12 recently, so I wanted to ensure that server 4 is not experiencing similar issues.

#### Details:
- **Domain:** [https://newroot.org](https://newroot.org)
- **Admin Domain:** [https://newroot.org/wp-admin](https://newroot.org/wp-admin)
- **Server:** opal4.opalstack.com
- **Outage Start Time:** 09-17-2024, around 7 AM CST
- **Current Status:** Still down as of today
- **Redis Error:** Screenshots indicate a Redis connection issue.
- **Notice Log as of 09-17-2024:** See figure 4 (attached)
- **Error Messages:**
  - "Error establishing a Redis connection" (see figures 1 and 2 for details)
  - WordPress is unable to establish a connection to Redis. (see figures 1 and 2 for details)
  - 500 Internal Server Error (see figure 3 for details)

Would you be able to confirm if there are any server-level issues or provide guidance on how to resolve the Redis connection error? We have attempted to troubleshoot on our end but are limited in what we can access at the moment. Any assistance or next steps would be greatly appreciated, as this is impacting the client’s business.

Please let me know if you require additional information from our side to expedite the resolution.

Thank you for your attention to this matter, and I look forward to hearing from you soon.

**Best regards,**
**Trenton Brew**
**Lead Developer**
**Gumbo Media LLC**
