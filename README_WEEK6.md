# Skillora — Week 6 Advanced Communication, Notifications & Reviews

This version continues the Week 5 Advanced Orders & Project Management workspace and adds the complete Week 6 communication/trust workflow:

**Client/Freelancer → Message → Notification → Project Completion → Review & Rating**

## Added in Week 6

- `messages.html` — responsive communication center
- `messages.css` — desktop/tablet/mobile communication UI
- `messages.js` — conversation state, message sending, simulated replies, notification center and filters
- Advanced unread indicators and notification counts
- Project-linked conversations that open the relevant Week 5 project
- Message search and conversation switching
- Enter-to-send / Shift+Enter message composer
- Character counter, validation and success toasts
- Notification center with All / Unread / Projects / Messages filters
- Mark-all-read interaction
- Project completion notification
- Completed-project review and rating section in `project-details.html`
- Interactive 1–5 star rating
- Review validation and submission
- Existing review cards with avatar, rating, text and date
- Review data persisted with localStorage
- Responsive mobile-friendly layouts

## Week 5 workflow preserved

Proposal → Accepted → Order/Contract → Project Progress → Delivery → Completed

## Week 6 workflow added

Messages → Notifications → Project Completion → Leave a Review → Display Reviews

## Demo behavior

This remains a frontend prototype. Authentication, real-time sockets, file uploads, payment processing and backend persistence are represented by localStorage/demo interactions.

Open `orders.html` for projects, `project-details.html?id=ORD-1024` for a completed-project review example, or `messages.html` for the communication center.
