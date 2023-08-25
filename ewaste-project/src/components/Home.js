import React from "react";
import Contact from "./Contact";
import Track from "./Track";

export function Home() {
  return (
    <>
      <div id="home" class="container-fluid bodyBg mt-0 mb-5 p-5">
        <div class="container-fluid mrgnt">
          <div class="container-fluid mt-md-5">
            <div class="row">
              <div class="col-md-6 ml-md-5 home-header">
                <h1>
                  SAVE THE ENVIRONMENT BY KEEPING OUR PLANET GREEN AND CLEAN
                </h1>
                <h1>FOR THE SAKE OF IMPROVEMENT</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="container-fluid mt-md-5">
            <div class="row">
              <div class="col-md-6 ml-md-5 home-paragraph">
                <p>
                  "Eco" often refers to an ecological or ecologically
                  benefficial procedure, whereas "cycle" refers to a circular
                  process or a recurring sequence of occurrences. It most likely
                  refers to a method or technique that focuses on handling
                  electronic garbage (E-WASTE) in an environmentaly sustainable
                  manner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid mrgn">
          <div class="d-grid gap-2 col-6 mx-auto center">
            <button
              type="button"
              class="btn btn-outline-secondary fontcolor colorGrn"
            >
              <b>Donate now</b>
            </button>
          </div>
        </div>
      </div>
      <div class="container-fluid p-md-2 mt-5 mb-5 color--white">
        <div class="container-fluid mrgn">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100 textbox">
                <div class="card-body fontcolor">
                  <h5 class="card-title">Proper E-waste Disposal</h5>

                  <p class="card-text mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nulla velit, semper id mollis vel, consequat ut mi.
                    Phasellus non dui congue nunc congue malesuada. Fusce
                    egestas maximus finibus. Cras a suscipit lacus. Etiam ac
                    scelerisque augue. Etiam non sem dolor. Phasellus vitae
                    tortor mollis, facilisis quam a, maximus nisi. Aenean
                    molestie magna nec ante facilisis imperdiet sit amet sed
                    sem. Morbi volutpat nisi nec urna feugiat, vitae rutrum
                    tortor scelerisque. Maecenas venenatis urna augue, a mattis
                    mi molestie ut. Etiam nulla neque, pretium et pulvinar in,
                    faucibus eu libero. Morbi mauris nulla, eleifend sit amet
                    vehicula ac, elementum nec sem. Praesent et ultricies elit.
                    Donec placerat interdum urna.
                  </p>

                  <div class="d-grid gap-2 col-6 mx-auto center">
                    <button
                      type="button"
                      class="btn btn-outline-secondary colorwht"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100 textbox">
                <div class="card-body fontcolor">
                  <h5 class="card-title">Things that are recyclable</h5>

                  <p class="card-text mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nulla velit, semper id mollis vel, consequat ut mi.
                    Phasellus non dui congue nunc congue malesuada. Fusce
                    egestas maximus finibus. Cras a suscipit lacus. Etiam ac
                    scelerisque augue. Etiam non sem dolor. Phasellus vitae
                    tortor mollis, facilisis quam a, maximus nisi. Aenean
                    molestie magna nec ante facilisis imperdiet sit amet sed
                    sem. Morbi volutpat nisi nec urna feugiat, vitae rutrum
                    tortor scelerisque. Maecenas venenatis urna augue, a mattis
                    mi molestie ut. Etiam nulla neque, pretium et pulvinar in,
                    faucibus eu libero. Morbi mauris nulla, eleifend sit amet
                    vehicula ac, elementum nec sem. Praesent et ultricies elit.
                    Donec placerat interdum urna.
                  </p>

                  <div class="d-grid gap-2 col-6 mx-auto center">
                    <button
                      type="button"
                      class="btn btn-outline-secondary colorwht"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100 textbox">
                <div class="card-body fontcolor">
                  <h5 class="card-title">How to Earn Points</h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nulla velit, semper id mollis vel, consequat ut mi.
                    Phasellus non dui congue nunc congue malesuada. Fusce
                    egestas maximus finibus. Cras a suscipit lacus. Etiam ac
                    scelerisque augue. Etiam non sem dolor. Phasellus vitae
                    tortor mollis, facilisis quam a, maximus nisi. Aenean
                    molestie magna nec ante facilisis imperdiet sit amet sed
                    sem. Morbi volutpat nisi nec urna feugiat, vitae rutrum
                    tortor scelerisque. Maecenas venenatis urna augue, a mattis
                    mi molestie ut. Etiam nulla neque, pretium et pulvinar in,
                    faucibus eu libero. Morbi mauris nulla, eleifend sit amet
                    vehicula ac, elementum nec sem. Praesent et ultricies elit.
                    Donec placerat interdum urna.
                  </p>

                  <div class="d-grid gap-2 col-6 mx-auto center">
                    <button
                      type="button"
                      class="btn btn-outline-secondary colorwht"
                    >
                      learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Track></Track>
      <Contact></Contact>
    </>
  );
}

export default Home;
