export async function fetchthAvaialblePlacess() {
  const response = await fetch("http://localhost:3000/places");
  const data = await response.json();

  if (!response.ok) {
    console.error(
      "%cFailed to fetch location information",
      "color: #FFD700; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px #FFA500"
    );
  }

  return data.places;
}
