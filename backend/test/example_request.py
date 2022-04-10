import requests
import base64

basic_auth_string = "adam10:pass1234"
basic_auth_bytes = basic_auth_string.encode('ascii')
basic_auth_b64_bytes = base64.b64encode(basic_auth_bytes)
basic_auth_b64_string = basic_auth_b64_bytes.decode('ascii')

# Get a User
r = requests.get(
    'http://127.0.0.1:8000/users/me/',
    headers={"Authorization": "Basic {}".format(basic_auth_b64_string)}
)
print(r)