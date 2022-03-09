<template>
  <div class="cover">
    <LargeTitle name="意見・お問い合わせ" />
    <div class="flex">
      <main class="main">
        <div class="page-cover">
          <section class="contact">
            <form>
              <dl>
                <dd><label for="subject">件名</label></dd>
                <dt>
                  <input
                    id="subject"
                    v-model="postData.subject"
                    name="subject"
                    type="text"
                  />
                </dt>
              </dl>
              <dl>
                <dd><label for="name">お名前</label></dd>
                <dt>
                  <input
                    id="name"
                    v-model="postData.name"
                    name="name"
                    type="text"
                  />
                </dt>
              </dl>
              <dl>
                <dd><label for="content">お問い合わせ内容</label></dd>
                <dt>
                  <textarea
                    id="content"
                    v-model="postData.content"
                    name="content"
                  />
                </dt>
              </dl>
              <button type="submit" @click="handleSubmit">送信する</button>
            </form>
          </section>
        </div>
      </main>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      postData: {
        name: '',
        subject: '',
        content: '',
      },
    }
  },
  head: {
    script: []
  },
  head() {
    return {
      title: " 意見・お問い合わせ - Next"
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post('https://nuxtblog.microcms.io/api/v1/contact', this.postData, {
        headers: {
          'Content-Type': 'application/json',
          'X-MICROCMS-API-KEY': 'c1679af6072a4a6297e60b18207645d24176',
        },
      })
    },
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
</style>
