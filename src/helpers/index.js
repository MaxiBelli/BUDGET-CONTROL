

export const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const formatDate = date =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });