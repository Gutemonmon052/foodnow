<script setup lang="ts">
import '@/components/styles/footer.css';
</script>

<template>
  <div class="fn-footer-content">
    <div class="fn-footer-upper">
      <div class="fn-footer-first-col">
        <div class="fn-footer-icons">
          <img src="@/assets/images/icons/foodnow2.svg" alt="Logo" />
        </div>
        <div class="fn-footer-sosmed">
          <h2>Find Us :</h2>
          <div class="sosmed-item-list">
            <div class="sosmed-item">
              <a
                href="https://www.facebook.com/foodnow.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/images/icons/facebook.svg" alt="Facebook" />
              </a>
            </div>
            <div class="sosmed-item">
              <a
                href="https://www.instagram.com/foodnow.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/images/icons/instagram.svg" alt="Instagram" />
              </a>
            </div>
            <div class="sosmed-item">
              <a
                href="https://www.youtube.com/foodnow_id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="@/assets/images/icons/youtube.svg" alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="fn-footer-second-col">
        <h2>Navigation</h2>
        <div class="fn-footer-nav-list">
          <div class="nav-items">
            <div class="fn-footer-nav-item">
              <a href="#">Home</a>
            </div>
            <div class="fn-footer-nav-item">
              <a href="#">Order</a>
            </div>
            <div class="fn-footer-nav-item">
              <a href="#">About</a>
            </div>
            <div class="fn-footer-nav-item">
              <a href="#">Blog</a>
            </div>
          </div>
          <div class="nav-items">
            <div class="fn-footer-nav-item">
              <a href="#">Contact</a>
            </div>
            <div class="fn-footer-nav-item">
              <a href="#">Login</a>
            </div>
            <div class="fn-footer-nav-item">
              <a href="#">Register</a>
            </div>
          </div>
        </div>
      </div>
      <div class="fn-footer-third-col">
        <h2>Contact Us</h2>
        <div class="fn-footer-contact">
          <div class="fn-footer-contact-item">
            <img src="@/assets/images/icons/email.svg" alt="Email" />
            <span>Food.now@mail.com</span>
          </div>
          <div class="fn-footer-contact-item">
            <img src="@/assets/images/icons/phone.svg" alt="Phone" />
            <span>+62848477102943</span>
          </div>
          <div class="fn-footer-contact-item">
            <img src="@/assets/images/icons/whatsapp.svg" alt="Whatsapp" />
            <span>+628184938494</span>
          </div>
        </div>
      </div>
      <div class="fn-footer-fourth-col">
        <h2>Location</h2>
        <div class="fn-footer-location">
          <div class="fn-footer-location-item">
            <img src="@/assets/images/icons/location.svg" alt="Location" />
            <span>Kerobokan</span>
          </div>
          <p>
            Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten
            Badung, Bali 80361
          </p>
        </div>
      </div>
    </div>
    <div class="fn-footer-lower">
      <span class="first-line">
        Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. |
        <a href="">Privacy Policy</a>
      </span>
      <span class="second-line">
        This site is protected by reCAPTCHA and the Google <a href="">Privacy Policy</a> and Terms
        of Service apply.
      </span>
    </div>
  </div>
</template>