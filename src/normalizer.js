// 1. md 파일을 정규화한다.
// 연속 두 번 이상의 개행을 한 번으로 바꿈
// 마지막 줄의 개행문자 이후 공백 삭제 (마지막 개행 포함)
/**
 *  # head1
    ## head2 
    paragraph with no new-line
    this line belong to a first line\
    paragraph with no new-line
    this line belong to a first line\
    this line is new paragraph\
    this line is new paragraph too\
 */
const regex = /(\n){2,}/g

export default {
  normalize(data) {
    const normalized_str = data.replaceAll(regex, "\n");
    return normalized_str;
  },
};