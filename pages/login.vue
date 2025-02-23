<template>
  <section
    class="flex w-full justify-center items-center bg-[#0F132A] custom-height-login"
  >
    <div class="bg-white block py-2 rounded-lg px-12">
      <div class="main-section">
        <div class="flex justify-center items-center pb-5">
          <img
            class="h-12 w-24"
            src="~/assets/icons/logo-login.svg"
            alt="host2media"
          />
        </div>
        <div class="text-center pb-5">
          <p class="font-bold text-2xl text-[#0F132A] Mulish-bold">
            Sign in to you account
          </p>
        </div>
        <form action="#">
          <div class="text-left pb-5">
            <label for="email">E-mail</label>
            <input
              class="border block w-full py-2 px-2 rounded-md"
              type="email"
              required
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div class="text-left pb-8">
            <label for="email">Password</label>
            <input
              class="border block w-full py-2 px-2 rounded-md"
              type="password"
              required
              name="password"
              placeholder="Password"
            />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="w-full py-3 text-white text-center rounded-lg bg-[#5564AD]"
            >
              Sign in
            </button>
          </div>
        </form>
        <div class="text-left py-3">
          <p class="text-sm text-left text-[#0F132A]">
            Forgot you passpord?
            <a href="#" class="underline"> Click here to reset </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
