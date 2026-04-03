# EmailJS Setup Guide

## Overview
This portfolio uses **EmailJS** to send contact form submissions directly to your email without needing a backend server. Perfect for Vercel deployment!

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Get Your Public Key
1. Log in to EmailJS dashboard
2. Go to **Account → API Keys**
3. Copy your **Public Key** (looks like: `abc123def456ghi`)
4. Keep this safe!

### 3. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click "Add Service"
3. Select your email provider:
   - **Gmail** (recommended): Connect Gmail
   - **Outlook**: Connect Outlook account
   - **Custom SMTP**: Use any email service
4. Click "Connect Account" and authenticate
5. Copy your **Service ID** (looks like: `service_abc123`)

### 4. Create Email Template
1. Go to **Email Templates**
2. Click "Create New Template"
3. Set template name (e.g., "contact_form")
4. Click the HTML tab and paste this beautiful template:
   ```html
   <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
     <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
     <div
       style="
         margin-top: 20px;
         padding: 15px 0;
         border-width: 1px 0;
         border-style: dashed;
         border-color: lightgrey;
       "
     >
       <table role="presentation">
         <tr>
           <td style="vertical-align: top">
             <div
               style="
                 padding: 6px 10px;
                 margin: 0 10px;
                 background-color: aliceblue;
                 border-radius: 5px;
                 font-size: 26px;
               "
               role="img"
             >
               👤
             </div>
           </td>
           <td style="vertical-align: top">
             <div style="color: #2c3e50; font-size: 16px">
               <strong>{{from_name}}</strong>
             </div>
             <div style="color: #cccccc; font-size: 13px">{{from_email}}</div>
             <p style="font-size: 16px">{{message}}</p>
           </td>
         </tr>
       </table>
     </div>
   </div>
   ```
5. Copy your **Template ID** (looks like: `template_abc123`)

**Or use the plain text version:**
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: New Portfolio Contact from {{from_name}}
   
   Message:
   {{message}}
   
   Reply to: {{reply_to}}
   ```

### 5. Update Portfolio Code
In `src/components/Contact.jsx`, replace these values at the top:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'      // From Account → API Keys
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE'      // From Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'    // From Email Templates
```

### 6. Update Recipient Email
In the same file, find the `handleSubmit` function and update:
```javascript
const templateParams = {
  to_email: 'your.email@gmail.com',  // ← Change this to your email
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  reply_to: formData.email,
}
```

### 7. Test the Form
1. Run dev server: `npm run dev`
2. Navigate to Contact section
3. Fill out and submit a test message
4. Check your email inbox (may take a few seconds)
5. If successful, you should receive the email!

## Troubleshooting

### Email not sending
- **Check console errors** (F12 → Console)
- **Verify API keys** are correct
- **Check Email Service** is connected in EmailJS
- **Verify Template** exists and has correct variables
- **Check spam folder** in your email

### "Service does not exist" error
- Make sure Service ID is exactly correct
- Service must be "enabled" in EmailJS dashboard

### Rate limits
- EmailJS free plan: 200 emails/day
- Upgrade for more if needed

## Security Notes
- Public Key is safe to expose (it's in frontend code)
- Service ID and Template ID are also safe to expose
- Email is validated on frontend before sending
- EmailJS handles backend securely

## Alternative Solutions
If EmailJS doesn't work:

### Option 1: Formspree
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Option 2: Discord Webhook
Send submissions to a Discord server instead of email.

### Option 3: Vercel Serverless Function
Create an API route with your own email service (more complex).

## After Deployment

Once deployed to Vercel:
1. Contact form will work the same way
2. No extra configuration needed
3. Emails sent from Vercel servers
4. Still protected by EmailJS security

## Support
- EmailJS Docs: https://www.emailjs.com/docs/
- Contact them: https://www.emailjs.com/contact

---

**Pro Tip**: Test thoroughly before sharing your portfolio link! Make sure emails arrive before showing to employers/investors.
