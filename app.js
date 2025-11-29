// INIT ICONS
lucide.createIcons();


// NAVBAR SHADOW ON SCROLL
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("bg-black/80", "shadow-lg", "backdrop-blur-md");
  } else {
    navbar.classList.remove("bg-black/80", "shadow-lg", "backdrop-blur-md");
  }
});


// SMOOTH SCROLL TO PRICING
document.getElementById("toPricing").addEventListener("click", () => {
  const section = document.getElementById("pricing");
  window.scrollTo({
    top: section.offsetTop - 60,
    behavior: "smooth"
  });
});


// CEK DOMAIN
document.getElementById("checkDomainBtn").addEventListener("click", () => {
  const input = document.getElementById("domainInput").value;
  const result = document.getElementById("domainResult");

  if (input.length < 3) {
    result.textContent = "Nama domain terlalu pendek 😭";
    result.classList.add("text-red-400");
    return;
  }

  result.textContent = `Domain "${input}.com" tersedia ✔`;
  result.classList.remove("text-red-400");
  result.classList.add("text-green-400");
});


// MODAL DATA
const packages = {
  basic: {
    title: "Basic Package",
    desc: "Domain .com atau .id dengan harga terjangkau.",
    features: [
      "✔ Domain .com / .id",
      "✔ Support 24/7",
      "✔ Gratis DNS Management"
    ]
  },
  pro: {
    title: "Pro Package",
    desc: "Paket terbaik untuk UMKM dan personal branding.",
    features: [
      "✔ Domain .com",
      "✔ SSL Certificate",
      "✔ Email @domainkamu",
      "✔ DNS Management",
      "✔ Support 24/7"
    ]
  },
  business: {
    title: "Business Package",
    desc: "Paket lengkap untuk bisnis profesional.",
    features: [
      "✔ Domain Premium",
      "✔ SSL",
      "✔ Email Bisnis",
      "✔ Backup harian",
      "✔ Prioritas Support"
    ]
  }
};


// OPEN MODAL
function openModal(id) {
  const data = packages[id];

  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;

  modalFeatures.innerHTML = "";
  data.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    modalFeatures.appendChild(li);
  });

  modalBackdrop.classList.remove("hidden");

  setTimeout(() => {
    modalBox.classList.remove("opacity-0", "scale-50");
    modalBox.classList.add("opacity-100", "scale-100");
  }, 50);
}


// CLOSE MODAL
function closeModal() {
  modalBox.classList.add("opacity-0", "scale-50");

  setTimeout(() => {
    modalBackdrop.classList.add("hidden");
  }, 250);
}
