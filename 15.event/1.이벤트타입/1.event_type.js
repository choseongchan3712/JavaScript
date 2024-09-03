//! 마우스 이벤트

//% click: 마우스 버튼을 클릭했을 때

//% dblclick: 마우스 버튼을 더블 클릭 했을 때

//% mousedown: 마우스 버튼을 눌렀을 때

//% mouseup: 누르고 있던 마우스 버튼을 놓았을 때

//% mousemove: 마우스 커서를 움직였을 때

//% mouseenter: 마우스 커서를 HTML 요소 안으로 이동했을 때(버블링 되지 않는다)

//% mouseover: 마우스 커서를 HTML 요소 안으로 이동했을 때(버블링된다)

//% mouseleave: 마우스 커서를 HTML 요소 밖으로 이동했을 때(버블링 되지 않는다)

//% mouseout: 마우스 커서를 HTML 요소 밖으로 이동했을 때(버블링된다)


//! 키보드 이벤트

//% keydown: 모든 키를 눌렀을 때 발생한다. 단, 문자, 숫자, 특수 문자, enter 키를 눌렀을 때는 연속적으로 발생하지만 그 외의 키를 눌렀을 때는 한 번만 발생한다.

//% keyup: 누르고 있던 키를 놓았을 때 한 번만 발생한다.


//! 포커스 이벤트

//% focus: HTML 요소가 포커스를 받았을 때(버블링되지 않는다)

//% blur: HTML요소가 포커스를 잃었을 때(버블링되지 않는다)

//% focusin: HTML 요소가 포커스를 받았을 때(버블링된다)

//% focusout: HTML요소가 포커스를 잃었을 때(버블링된다)

//? focusin, focusout 이벤트 핸들러를 이벤트 핸들러 프로퍼티 방식으로 등록하면 크롬, 사파리에서 정상 동작하지 않는다. focusin, focusout 이벤트 핸들러는 addEventListener 메서드 방식을 사용해 등록해야 한다.


//! 폼 이벤트

//% submit:
//% 1. form 요소 내의 input (text, checkbox, radio), select 입력 필드(textarea 제외)에서 엔터키를 눌렀을 때.
//% 2. form 요소 내의 submit 버튼을 클릭했을 때


//! 값 변경 이벤트

//% input: input, select, textarea 요소의 값이 입력되었을 때

//% change: input, select, textarea 요소의 값이 변경되었을 때

//% readystatechange: HTML 문서의 로드와 파싱 상태를 나타내는 document.readyState 프로퍼티 값이 변경될 때


//! DOM 뮤테이션 이벤트

//% DOMContentLoaded: HTML 문서의 로드와 파싱이 완료되어 DOM 생성이 완료되었을 때


//! 뷰 이벤트

//% resize: 브라우저 윈도우(window)의 크기를 리사이즈할 때 연속으로 발생한다.

//% scroll: 웹페이지 또는 HTML 요소를 스크롤할 때 연속으로 발생한다.


//! 리소스 이벤트

//% load: DOMContentLoaded 이벤트가 발생한 이후, 모든 리소스의 로딩이 완료되었을 때

//% unload: 리소스가 언로드될 때

//% abort: 리소스 로딩이 중단되었을 때

//% error: 리소스 로딩이 실패했을 때




















