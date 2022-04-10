## Setup

Step 1 - Make a React App

```
npx create-react-app frontend
```

Step 2 - Make a Django Rest App

```
cd backend/
docker build . --tag django-chat
docker run -p 8000:8080 -d django-chat
```
