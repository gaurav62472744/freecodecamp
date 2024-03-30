let data = [
  {
    img: "https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png",
    name: "Shawn Wang",
    location: "Singapore",
    company: "Amazon",
    history:
      "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
  },
  {
    img: "https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png",
    name: "Sara Chima",
    location: "Nigeria",
    company: "Chatdesk",
    history:
      "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
  },
  {
    img: "https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png",
    name: "Emma Bostian",
    location: "SSweden",
    company: "Spotify",
    history:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify",
  },
];

let certifi = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVg5qT8hVHfozuOqt5KouH3FFgWlH0ZA4AA&usqp=CAU",
    text: "Responsive webdesgin Certification",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwQHqYp6zhDRfmW7B8oEcgE029Lazus9Ac5n2gr1M0zshPAx7rJdEKFpS-R_AS-QcsS4&usqp=CAU",
    text: "Javascript Algorithms and Datastructures Certification",
  },
  {
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA8FBMVEX/////0kI3c6U3dKf/00P/0EA3cKD/10j/1UU3d6w3dKb/zj7/2Ur/zDv/yjk2bpw4erE2a5f/3U/a4en/+/DL1+T/31Cnus7/6K7/1VL/565Ygqr/4GiIqMgjbqf/zDEpaJpYircWaaP/1DP/zzT/3Gr/z0z/yCIWaqX/1z4oZZX/3pYrdK7u8fUtbJ//4m7/4Ym1x9uet9L/9t7/33/X4ez/+OhkjLL/2V3/3Dv/46P/0mT/xBL/6LmVsc9ul8BrkLV9ocVGgLH/8MN3lLL/7sgOWYqHoLmbr8T/6pv/5ob/4Fz/1nL/7KP/79D/2YEy9IW6AAAJ2ElEQVR4nO3dC1faPBgHcJGrY1QQ8DZosa0WELqBg4miU5zu+ur3/zZv723atAkFktjyP2eezbNzoL+Tpk+TNN3Z2WabZGdYnzRHo/G4bWU8Pho1J/Uh7e/FWCaj++8LvstrGbjZ0//Ni6K4+H4/qtP+jixkOGovujrRXrVa3YMmm83qaGfjJu0vSzXD8Vl3MKjaCbUyo4E9jGh/ZVoZaVJVTxBWenZV8XFC+3tTyNEAkMKy+vDhQ1YVP6XtdGxWfVS4Vtnd3V3xU6qukI/danyrXe1kHNM+AmIZBprVclY6V1oa1zBAtbSVprWbDq11WGnppEHrDKwX4loVCgXaR7L5jLxWg271jO8O4lmpD7SPZePxUlWNgnzY7saxKhQ6SS+4mrxr9Wj/sh5oWzhWWtuieSQE0h4ErbTGxcexSnzTOnMblvfXIz6GVUH9RuswyMS1AotwPoZVoSBSOgpCcbB4cPTgcRDDKunnoYsF1pRjPoZVoZPs8S0k1jJWhc4vSodBJqjTEGGVLqxFdAe/nFWhc0TpMMjELh32oKXDklYpwdJgIEXpslbpwDJoeEcrrlUqsKwL32Bh3kjfd2NapQHLrdX57t5Zthu3XaUBKzgeE9cq8VjQkb6YVonHWqfVfiqxYlqlEiuuVRqxYlulECu+VfqwVrBKOtaia0YU9T/hwbJKOhZuRByr/f4WS4+IY7XFMiPiWG2xzIg4VlssMyKOlYXVuDkG8nRF+9vHSL05GjXjZdLBsbKxpB4YSTp/on3wy6R5v+gaz0vwWFFV1fhhptPBs3KwPpopOilJ0g1tAswMxwP8ZwFi1KIhWB4rLT3pXbSuMfAwwAatQCzQSov0lbYEMpPqss9NxLYCsAJWpZJ8QhsDkTG4xH2jVl4siFWplCvS5ojMI0/QquZiQa00LZbb1vcBSSsXK8SqlJPPaZOE5pGsFQTLZ5XLSce0UUIyItlf1TxY4Vaa1pQ2CzR10lYBLIhVLn9N2wWaBWkrPxbMKpORWSxOx+TqK8vKhwW3ymRytGUg4YlbgVhhViw2rXtS9ziuVQSWxyqTZ6/Y6pK3ArBCrbSmxdoA19GAvJUXK8IqI3+hreMLhXalYRmr4XSsKKtMXqatA2bCU7Cq9Y0nLDSsSKtMXnil7QPE7d4JWtX6xhY1DQlhlZcvafsAoWJVezEe05hCsACrfP6Cto83zp0OUata3/jwKynKysBSGpSBvLGffCZs9cP48CcJZZWXnykDeWONY5G1si6GOze9yA5Lj8DSXA8Vq9qL+eFfcyirfPkfXR9vhl0aVv2f5qf3kFb5skAXyBvjmXrSVta10HMxDLXKlxnq4fV7HeJWdsM67iGttJbFzu1he0DeqlazPvwEw6ossDNMs97nJvCsXqwNJu0qK9KqLLAzb0GhXb3YD95b18Joq7LAzg0PZDMZUlZW946wKgvsrHuAYm2yb685m7ye53CsypVbmj7eDGFYm6wZfjofbd7qIK3KFWZupes8Qav+yw93S4gGplW5wkxVOgliBa2iNrPAter3X2q/vLtnFHN4VgxhNQNYWFbGekh/+qF5ean9OAI3pD7BtSpXFEo2gQSw0FaqKhZ+/Bo1m3XsBDZEnJbwrdjFQlqp4rfRyptB3klLWLGDBW4VhrRSxfbq22ZeXeP27YxhNRH7qoFW4sPqVE/Xkqdwx7BiFAtpteKeV43X43+SRRUyiAyxYhMr68PyWamq7wULV0+//3z259z8Gcx1UZKknjMyim/FDpanzkJYgZv8To9bs9ns8MCIvjz74KMnYetEkQPuMCt2sOrwPeggVqKnXT21ZoeHB4eW1YFL5k/o6tolrNgpSofQPehgVm5/9frXaFKkrCplij5A7BtplJVnX9E/5tlHzIpjZ2Vp2J5OvlpUtDus6eEhrlXEqm2sYtQ+C9mZC+Px6va29d+nMxOLnFVFeKMK5M0iiz4HC07DapC3qjA0Jf09i2Hl7N9+aJ+E5Kwqyh1NHyBtHm3l7O37G2oV3bmvalVR2Jk3HPFoK3vX6KsZBasKQzPSTR5tZdcNn5e3Qq2CRFtxzNSkWqElIq0KqrkHw3RGw4pjp3LQagekld1l/UfFiqGL4c7OA9LKLhz+HlKw4hSWliuPeZSV1b83ZjSsuDllHyATHmVlvVPoeUbDimNmPtqIiLT6ZPw/rcvasFUZYqWcUuYB84CysrB+r2CFP+Dux5qzU2Xp0cvS6HlnE+vPwfqsogdlPFaMnYX6eYiYozexPtOwYujG0MzDLmI9g4nVWs0Ke7DPa8UxM/5up6lGW8GwSFmxVJGa+bAbvU4miEXIir2GpXfxkVZBLGJWbNUNZqKtAlgwq3UOythWHDPzOt6MxCgrPxYxqzk7w37efIqysrE+ErZS2FnTDWQoRliBLYuYlcBaPerEOhGhVmisjVgxs0g5mLYaarXvxdpa6XlQQ9che7AirdY0KGP0V8yeg2YeOiFW+24HT8pqzmjf7qYtwq1cLEJWygWbNQOQUUeFWTlYRKwEhWNtpCEkj6IatIrCgljlnPiZIDc4HNirK4ryxtLWBNEZ/ux0VHW/ADxfEo4FsSqeROYiIrdvpyxN5eCk+etbwXq+xHrIJBQL1q5Y28OJToJYsP5qi2UkgAXt23tbLD1+LPh1cNuyjLRwrLZYZlo4VqXM+an99o5Tz5s8Tq24f31v173l0sKx0oorGRIhEAanItaZFpYV7oA7Q1tbbCJQLFyrwE1O0rGKa7RKPNY6rSoCi7Nc60trnVYsPQqwibTWaZV4rOIardKBFVa4R1sZpRUw0pcGrFhWQvny+fnuC8CV9A6+GNNKsauESyVNLSuelTv7cOdqMbTf2ibSKsY7B73TD1/sM5FLD9YyfTs4s6zYEzlJxyrFug6CHfmbkA6s64gCK7y+8r0p4FSw5r4SjnVewrHyD8oo4Pu+jC6eSz7W11IMK1jL4lKAddyLM9jnq6e0PotLA9ZV4B05OAOjvo0zFWemPtlYO8VSnEFk4HL4JjgrZd7J6o+4Oe7FsKpUPI+i3jgNi5uz+aLH9QXXyjco40zkvLlWHNOrINeR58C7TDAnJ4TLu+e7N0VwrebvZ2FR3HzFeOcEfBBZUQQPFcPLtteYa5z3KMAGRoE1a1r3ztbzqRuKpbWiFaPPmaw959IarJK9zsGTGym3mpXCJb1q8OTqRF7Fas7ORmtEcirLsZ8GuE1Jd+XJaU6Wl7cS5rep6a2AvH6RZTm/hJWgcJcp6qz8eb7UF66VoTeEgJVWks5vb9J3/vnSeL48lxVBFuRK0IozVvgpysX7exZgc2lcPd1c/ru90GHcCOWTf283d68pPvUQaTQa0+lU+0n7i2yzDaH8D9ae1v0+vGQPAAAAAElFTkSuQmCC",
    text: "Scientific Computing with phython certification",
  },
  {
    img: "data:image/png;base64,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",
    text: "React modules with certification",
  },
  {
    img: "data:image/png;base64,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",
    text: "C programming language certification",
  },
];
export { data, certifi };
