export interface Multilevel {
  id: number;
  name: string;
  favourites?: Multilevel[];
}

export const multilevel: Multilevel = {
  id: 1,
  name: "Sony",
  favourites: [
    {
      id: 1,
      name: "PS1",
      favourites: [
        {
          id: 1,
          name: "Crash",
          favourites: [
            {
              id: 1,
              name: "Crash 1",
              favourites: [
                {
                  id: 1,
                  name: "Fox",
                  favourites: [
                    {
                      id: 1,
                      name: "Test Infinite",
                    },
                    {
                      id: 2,
                      name: "Test Infinite Again",
                      favourites: [
                        {
                          id: 1,
                          name: "Test Infinite Once Again",
                        },
                        {
                          id: 2,
                          name: "Test Infinite Again and again",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  name: "Dog",
                },
              ],
            },
            {
              id: 2,
              name: "Crash 2",
              favourites: [
                {
                  id: 1,
                  name: "Turtle",
                },
              ],
            },
            {
              id: 3,
              name: "Crash 3",
              favourites: [
                {
                  id: 1,
                  name: "Cat",
                },
                {
                  id: 2,
                  name: "Koala",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "PS2",
      favourites: [
        {
          id: 1,
          name: "GOW",
          favourites: [
            {
              id: 1,
              name: "GOD",
              favourites: [
                {
                  id: 1,
                  name: "Kratos",
                },
                {
                  id: 2,
                  name: "Zeus",
                },
              ],
            },
            {
              id: 2,
              name: "GOD 2",
              favourites: [
                {
                  id: 1,
                  name: "Poseidon",
                },
                {
                  id: 2,
                  name: "Ares",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "PS3",
      favourites: [
        {
          id: 1,
          name: "POF 1",
          favourites: [
            {
              id: 1,
              name: "Sands",
            },
            {
              id: 2,
              name: "Thrones",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "PS4",
      favourites: [
        {
          id: 1,
          name: "Spiderman",
          favourites: [
            {
              id: 1,
              name: "Venom",
              favourites: [
                {
                  id: 1,
                  name: "Peter",
                  favourites: [
                    {
                      id: 1,
                      name: "MJ",
                    },
                    {
                      id: 2,
                      name: "May",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "PS5",
      favourites: [
        {
          id: 1,
          name: "Horizon",
          favourites: [
            {
              id: 1,
              name: "GTA",
            },
          ],
        },
      ],
    },
  ],
};
