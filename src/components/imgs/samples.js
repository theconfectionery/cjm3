const embeddable = "https://www.youtube.com/embed/CrRKCJ1j2f8"

export const contentfulFactory = (
  sortKey,
  uniqueVideoId,
  embeddedUrl,
  redirectUrl
) => {
  return { sortKey, uniqueVideoId, embeddedUrl, redirectUrl }
}

const contentfulExample = {
  uniqueVideoId: "snoop_dogg_1",
  embeddedUrl: "https://www.youtube.com/embed/CrRKCJ1j2f8",
  redirectUrl: "https://www.youtube.com/watch?v=CrRKCJ1j2f8",
}

export const videosExample = {
  PBS: [
    "https://www.youtube.com/watch?v=tSAKzVP2IGk",
    "https://www.youtube.com/watch?v=midRkOl2m8M",
  ],
  AMEX: [
    "https://www.youtube.com/watch?v=hPPNJ0_Dyhk",
    "https://www.youtube.com/watch?v=zDhJHKnT7zA",
  ],
  Dogg: ["https://www.youtube.com/watch?v=lFjyVmzC0AU"],
  Tiffany: ["https://www.youtube.com/watch?v=UqtnPXVSlvE"],
  Airplane: ["https://www.youtube.com/watch?v=vLaX8UvVUQw"],
  Confectionary: ["https://www.youtube.com/watch?v=nCPfJxSxZQk"],
  PlateFork: ["https://www.youtube.com/watch?v=eLeYCwv0j9Q"],
  Macys: ["https://www.youtube.com/watch?v=hE1_bewlbQA"],
  RunningMan: ["https://www.youtube.com/watch?v=JzW8nYGSGWQ"],
  IBM: ["https://www.youtube.com/watch?v=HatC68Pea6M"],
  DailyShow: ["https://www.youtube.com/watch?v=5PQStOf_l6I"],
  LandRover: ["https://www.youtube.com/watch?v=R563ZQITrRY"],
  Theatre: ["https://www.youtube.com/watch?v=pgz6PnHkmpY"],
}
