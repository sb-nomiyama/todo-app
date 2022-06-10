import React from 'react';
import { TextField, Typography, Button } from '@mui/material';

const LoginForm = () => (
  <div>
    {/* Paperは他のコンポーネントを乗せる土台的コンポーネント */}
    <div>
      {/* Typographyはテキストコンテンツ用のコンポーネント。
      variantの設定により大きさを指定する */}
      <Typography>ログインしてください。</Typography>
      {/* TextFieldは入力欄とラベルがセットになったコンポーネント。
      labelは画面表記されるラベルの内容 */}
      <TextField label="Name" variant="standard" />
      <TextField label="Password" variant="standard" />
      {/* Buttonコンポーネントを利用 variantは外見の指定、colorは色の指定 */}
      <Button variant="contained" color="primary">
        ログイン
      </Button>
    </div>
  </div>
);
export default LoginForm;
