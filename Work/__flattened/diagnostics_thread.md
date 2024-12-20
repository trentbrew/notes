**Kelly Yacono**
*7:25 AM*
Good Morning, @Trent Brew! I hope all is well! I'm so sorry to bother you but it looks like our website is down. When I go to newroot.org, I see the attached error message. Could you please take a look and let us know if there's anything we can do on our end? Thank you!
*Website Error - 9.17.2024.png*

---

**Matthew**
*7:32 AM*
Hi @Kelly Yacono! Shoot, sorry that happened. We're on it as soon as we can. Trent was up late designing for a flurry of last-minute deliverables due today, but we'll make sure he gets to it when he's recentered on Gumbo in a bit.

---

**Kelly Yacono**
*7:33 AM*
Thanks, @Matthew! I completely understand. Thank you both for looking into this for us!

---

**Matthew**
*7:58 AM*
You bet. We'll follow-up in a bit.

---

**Kelly Yacono**
*11:12 AM*
Good Afternoon, @Matthew! Just wanted to check in. I'm sure you all are still catching up but wanted to see if there are any updates with our website. Our site has been down all day and no one has been able to access our curriculum. If you don't think you'll be able to take a look within the next hour, please let me know. Thank you so much for your help!

---

**Matthew**
*11:15 AM*
On it! Trent and I just hopped on the phone.
@Kelly Yacono

---

**Kelly Yacono**
*11:29 AM*
Amazing! Thank you!

---

**Matthew**
*11:49 AM*
@Trent Brew is on it and will be in touch about what he's learning/seeing.

---

**Trent Brew**
*12:24 PM*
Hey @Kelly Yacono and Team,
I can confirm that I'm unable to access the backend because of the same error. It's a PHP error and there is some information I would need to know from you to better understand what caused the issue, like if anyone has made updates to the PHP code recently or attempted to update certain plugins.
To use an analogy, the issue is with the kitchen in the back of the restaurant, but we have only been serving the food and decorating the dining area and so the issue is with the platform itself – it could be faulty appliances, but something we may not be able to resolve in just an hour. I hope I'm wrong, but it looks like others have experienced this as well:
- [Error establishing a Redis connection only on plugin updates](https://wordpress.org/support/topic/error-establishing-a-redis-connection-only-on-plugin-updates/)
- [How to fix the error establishing a Redis connection error](https://gridpane.com/kb/how-to-fix-the-error-establishing-a-redis-connection-error/)
- [Troubleshooting error establishing a Redis connection during WordPress migration](https://wordpress.stackexchange.com/questions/419566/troubleshooting-error-establishing-a-redis-connection-during-wordpress-migrati)

Since I can't access the dashboard I'll have to use FTP which is a way of configuring WordPress through the command line. My understanding is that this is doable using the Opalstack credentials you provided but that's just a hunch. I'm digging into that now.
This is not a simple bug and I can't guarantee it will be a simple fix, but I'll be heads down on this as long as it takes. (edited)

---

**Elizabeth Kesner**
*12:27 PM*
Thanks for the update, @Trent Brew, and for helping to resolve this issue!
Is there anything else needed from NewRoot to help you gain deeper access to our site?
P.s. I really appreciated the analogy! 🤓

---

**Kelly Yacono**
*12:30 PM*
Yes, thank you for the update and information, @Trent Brew! The analogy is super helpful! As far as I know, we haven't made any updates to the PHP code recently or updated any plugins.
@Ryan Nishimoto, is there anything you updated or changed recently? Thank you so much for digging into this for us, Trent. If there's anything you need from us please don't hesitate to reach out.

---

**Trent Brew**
*12:32 PM*
Happy to help! The following information will help me investigate the issue:
1. **Hosting and Server Environment Changes:**
   - Have there been any recent changes or updates to the hosting environment (Opalstack/NetworkSolutions)?
   - Have you recently switched hosting providers or migrated the website to a different server?
2. **Caching/Plugin Updates:**
   - Has anyone deactivated or uninstalled any plugins related to Redis or caching?
3. **Error Logs:**
   - Have there been any unusual errors recently, prior to this Redis error?
4. **Server Resources:**
   - Has there been any spike in traffic or resource usage (CPU, RAM, disk space) that may have overloaded Redis or caused it to stop functioning? (edited)

---

**Kelly Yacono**
*12:39 PM*
We were never alerted of any changes or updates to Opalstack or Network Solutions so I assume everything is the same there. No migrations have been done either.
Caching/Plugin Updates: As far as I know, no one has deactivated or uninstalled any plugins related to Redis or caching.
@Ryan Nishimoto, can you please confirm?
Error Logs: As far as I know, we haven't seen any unusual errors recently.
Server Resources: I'm not sure how to answer this one or where I would go to find this information.

---

**Kelly Yacono**
*12:40 PM*
Ryan indicated that he added a new staff member to the website (Lala Bolander) but that's been the only recent change.
Oh, the other changes we made were updating the links to certain lessons in our DISC portal. This involved uploading the document to the media library and linking the updated document to specific lessons.

---

**Trent Brew**
*12:53 PM*
Got it, thank you for this info it's very helpful. I'm digging into the FTP step now to ensure I can access the account from the command line. I'll let you know once I'm in, and will proceed to update the necessary PHP files. (edited)

---

**Kelly Yacono**
*12:53 PM*
Sounds good, Trent. Thank you so much for your help on this!

---

**Matthew**
*12:57 PM*
Thanks for the quick responses, y'all. Sorry you're dealing with this on a Tuesday. Hopefully we can find a solve for you.
