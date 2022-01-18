<template>
  <a-comment>
    <div>
      <a-list
        v-if="comments.length"
        :data-source="comments"
        :header="`${comments.length} ${
          comments.length > 1 ? 'replies' : 'reply'
        }`"
        item-layout="horizontal"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment
            :author="item.author"
            :avatar="item.avatar"
            :content="item.content"
            :datetime="item.datetime"
          />
        </a-list-item>
      </a-list>
      <a-comment>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="aaaaaa"
        />
        <div slot="content">
          <a-form-item>
            <a-textarea :rows="4" :value="value" @change="handleChange" />
          </a-form-item>
          <a-form-item>
            <a-button
              html-type="submit"
              :loading="submitting"
              type="primary"
              @click="handleSubmit"
            >
              Viết bình luận
            </a-button>
          </a-form-item>
        </div>
      </a-comment>
    </div>
    <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon
            type="like"
            :theme="action === 'liked' ? 'filled' : 'outlined'"
            @click="like"
          />
        </a-tooltip>
        <span style="padding-left: '8px'; cursor: 'auto'">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </a-tooltip>
        <span style="padding-left: '8px'; cursor: 'auto'">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
    <a slot="author">User</a>
    <a-avatar
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Dũng Đầu Buồi"
    />
    <p slot="content">Đây là cmt.</p>
    <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
      <span>{{ moment().fromNow() }}</span>
    </a-tooltip>
  </a-comment>
</template>
  

<script>
import moment from "moment";

export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
      comments: [],
      cmtList: [],
      submitting: false,
      value: "",
      cmtCustomer: {
        name: "",
        avatar: "",
        content: "",
        datetime: Date.now(),
      }
    };
  },
  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "",
            avatar: "",
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.comments = this.comments.push(this.cmtCustomer);
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>