<template>
  <div class="cover">
    <LargeTitle name="ご意見・お問い合わせ" />
    <div class="flex">
      <main class="main page">
        <div class="page-cover">
          <section class="contact">
            <form class="form">
              <dl class="form__item">
                <dd class="form__name"><label for="name">お名前<span class="mark _gray">任意</span></label></dd>
                <dt class="form__input">
                  <input
                    id="name"
                    v-model="postData.name"
                    name="name"
                    type="text"
                  />
                </dt>
              </dl>
              <dl class="form__item">
                <dd class="form__name"><label for="subject">件名<span class="mark _gray">任意</span></label></dd>
                <dt class="form__input">
                  <input
                    id="subject"
                    v-model="postData.subject"
                    name="subject"
                    type="text"
                  />
                </dt>
              </dl>
              <dl class="form__item">
                <dd class="form__name">
                  <label for="content">お問い合わせ内容<span class="mark _red">必須</span></label>
                </dd>
                <dt class="form__input">
                  <textarea
                    id="content"
                    v-model="postData.content"
                    name="content"
                  />
                </dt>
              </dl>
              <button :disabled="isButton" id="submit" type="submit" @click="handleSubmit">送信する</button>
            </form>
          </section>
        </div>
      </main>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      postData: {
        name: "",
        subject: "",
        content: ""
      }
    };
  },
  head: {
    script: []
  },
  head() {
    return {
      title: "ご意見・お問い合わせ - Next"
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post(
        "https://nuxtblog.microcms.io/api/v1/contact",
        this.postData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-MICROCMS-API-KEY": process.env.API_KEY
          }
        }
      );
    },
  },
  computed: {
    isButton() {
      if (this.postData.content) {
        return false;
      } else {
        return true;
      }
    }
  },
};
</script>

<style lang="scss">
$sp: 768px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.container {
  width: 70%;
  padding: 0 15px;
  @include sp {
    width: 100%;
  }
}
.page {
  @include sp {
    padding: 0;
  }
}
.page-cover {
  background-color: var(--white-color);
  border-radius: 2rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  margin: 0 0 10rem 0;
  padding: 5rem 2rem;
  @include sp {
    width: 100%;
    border-radius: 0;
    margin: 2rem 0 3rem 0;
    padding: 4rem 2rem;
  }
}

.contact__text {
  font-size: var(--md);
}

.form {
  &__item {
    margin-bottom: 2rem;
  }

  &__name {
    font-size: var(--sm);
    padding-bottom: 0.6rem;

    .mark {
      display: inline-block;
      width: 5rem;
      font-size: calc(var(--sm) - 0.2rem);
      color: var(--white-color);
      text-align: center;
      padding: 0.4rem 0 0.1rem 0;
      margin-left: 1rem;
      position: relative;
      top: -0.1rem;

      &._red {
      background-color: rgb(218, 31, 31);
      }
      &._gray {
      background-color: rgb(70, 70, 70);
      }
    }
  }
  &__input {
    display: block;
    input {
      width: 70rem;
      max-width: 100%;
      height: 5rem;
      font-size: var(--sm);
      font-weight: normal;
      border: 1px rgb(114, 114, 114) solid;
      padding: 0 1rem;
    }
    textarea {
      width: 100%;
      max-width: 100%;
      height: 30rem;
      font-size: var(--sm);
      font-weight: normal;
      line-height: 1.5;
      border: 1px rgb(114, 114, 114) solid;
      padding: 1rem;
    }
  }

  #submit {
    display: block;
    width: 40rem;
    max-width: 100%;
    background-color: rgb(44, 44, 44)!important;
    font-size: var(--sm);
    color: var(--white-color);
    text-align: center;
    padding: 2rem;
    margin: 3rem auto 0 auto;
    transition: all 0.3s ease;
    &:hover {
      background-color: #000;
    }
  }
    button[disabled] {
    background-color: rgb(194, 194, 194)!important;
    &:hover {
    cursor: no-drop;
    background-color: rgb(194, 194, 194)!important;
    }
  }
}
</style>
