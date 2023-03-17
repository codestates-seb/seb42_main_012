const validate = {
  email: {
    required: '아이디(이메일)를 입력해주세요',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      message: '이메일 형식이 아닙니다.',
    },
  },
  password: {
    required: '비밀번호를 입력해주세요',
    pattern: {
      value: /^(?=.*[A-Za-z\d])(?=.*\d)(?=.*[!@#^*_])[A-Za-z\d!@#^*_]{8,}$/i,
      message:
        '비밀번호는 8자 이상, 대소문자 구분, 특수기호 1개 이상 사용해주세요. (사용가능한 특수문자 : !@#^*_)',
    },
  },
  passwordCheck: {
    required: '비밀번호를 확인해주세요',
    pattern: {
      value: /^(?=.*[A-Za-z\d])(?=.*\d)(?=.*[!@#^*_])[A-Za-z\d!@#^*_]{8,}$/i,
      message: '입력된 비밀번호와 일치하지 않습니다.',
    },
  },
  displayName: {
    required: '이름(닉네임)을 입력해주세요',
    pattern: {
      value: /^[가-힣A-Za-z\d_-]{6,}$/i,
      message:
        "한글/영문(대소문자)/숫자 6자 이상이여야 합니다. (특수문자는  '-' , '_' 만 허용)",
    },
  },
  tag: {
    required: '태그를 입력해주세요',
    pattern: {
      value: /^[a-z\s\d-]{2,}$/i,
      message:
        "태그 이름은 영소문자 10자 이하여야 합니다. (특수문자는 '-'만 허용)",
    },
  },
};

export default validate;
