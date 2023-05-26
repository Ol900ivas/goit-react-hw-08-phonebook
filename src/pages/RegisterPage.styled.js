import styled from '@emotion/styled';

// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   border: none;
//   border-radius: 50%;
//   height: 30px;
//   width: 30px;
//   align-items: center;
//   transition: transform 300ms ease-in-out;
// &:hover {
//     transform: scale(1.2);}

// `;

export const Form = styled.form`
  background-color: #bab0b0;
  border-radius: 15px;
  height: 550px;
  width: 350px;
  position: relative;
  overflow: hidden;

  //   &::after {
  //     content: '';
  //     opacity: 0.8;
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     bottom: 0;
  //     left: 0;
  //     background-repeat: no-repeat;
  //     background-position: left bottom;
  //     background-size: 500px;
  // background-image: url('https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100');
  //   }
`;

export const FormTitle = styled.h2`
  color: #fff;
  font-size: 1.7em;
  text-align: center;

  span {
    color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease;
  }
`;

export const Div = styled.div`
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
`;

export const Input = styled.input`
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-size: 12px;

  &:last-child {
    border-bottom: 0;
  }
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const SubmitButton = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(256, 256, 256, 0.7);
  border: 0;
  border-radius: 15px;
  display: block;
  margin: 15px auto;
  padding: 15px 45px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
