const validate = {
  // 회원가입, (마이페이지 비밀번호변경 부분 포함)
  email: {
    required: '아이디(이메일)를 입력해주세요',
    pattern: {
      value: /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/i,
      message: '올바른 이메일 형식이 아닙니다.',
    },
  },
  password: {
    required: '비밀번호를 입력해주세요',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#^*_])[A-Za-z\d!@#^*_]{8,}$/i,
      message:
        '비밀번호는 8자 이상, 특수기호 1개 이상 포함해야합니다. (사용가능한 특수문자 : !@#^*_)',
    },
  },
  // passwordCheck: {
  //   required: '비밀번호를 확인해주세요',
  //   pattern: {
  //     value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#^*_])[A-Za-z\d!@#^*_]{8,}$/i,
  //     message: '입력된 비밀번호와 일치하지 않습니다.',
  //   },
  // },
  displayName: {
    required: '이름(닉네임)을 입력해주세요',
    pattern: {
      value: /^[a-zA-Zㄱ-힣0-9_]{2,8}$/i,
      message:
        '닉네임은 최소 2자 이상, 8자 이하로 한글/영문(대소문자)/숫자/특수문자를 포함해야합니다. (사용가능한 특수문자 : _)',
    },
  },
  // 헬스장, (커뮤니티 제목/내용 부분 포함)
  tag: {
    required: '태그를 선택해주세요',
  },
  title: {
    required: '제목을 입력해주세요',
  },
  contents: {
    required: '내용을 입력해주세요',
  },
  phoneNumber: {
    required: '핸드폰 번호를 입력해주세요',
    pattern: {
      value: /^\d{2,3}-\d{3,4}-\d{4}$/i,
      message: '숫자만 입력 가능합니다. (사용가능한 특수문자 : -)',
    },
  },
  review: {
    required: '리뷰를 작성해주세요',
    pattern: {
      value: /^[a-zA-Zㄱ-힣0-9_]{10,}$/i,
      message: '리뷰는 최소 10자 이상으로 작성해야합니다.',
    },
  },
  gymName: {
    required: '헬스장 상호명을 입력해주세요',
    pattern: {
      value: /^[a-zA-Zㄱ-힣0-9_]{2,}$/i,
      message: '상호명은 최소 2자 이상으로 작성해야합니다.',
    },
  },
  gymImg: {
    required: '이미지를 등록해주세요',
    pattern: {
      value: /(.*?)\.(jpg|jpeg|png|gif|bmp)$/i,
      message: '올바른 이미지 형식이 아닙니다.',
    },
  },
  mainPrice: {
    required: '대표 가격을 입력해주세요',
    pattern: {
      value: /^[0-9]+$/i,
      message: '숫자만 입력이 가능합니다.',
    },
  },
  detailPrice: {
    required: '상세 가격을 입력해주세요',
    pattern: {
      value: /^[0-9]+$/i,
      message: '숫자만 입력이 가능합니다.',
    },
  },
  gymOpenTime: {
    required: '운영 시간을 입력해주세요.',
  },
  gymAddress: {
    required: '주소를 입력해주세요',
  },
};

export default validate;
