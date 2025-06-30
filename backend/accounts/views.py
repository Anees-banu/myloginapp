from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def register_view(request):
    data = request.data
    print(data)
    if User.objects.filter(username=data['username']).exists():
        return Response({'error': 'Username taken'}, status=400)
    if User.objects.filter(email=data['email']).exists():
        return Response({'error': 'Email taken'}, status=400)
    user = User.objects.create_user(username=data['username'], email=data['email'], password=data['password'])
    return Response({'message': 'User created'}, status=201)

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=400)

    try:
        user_obj = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=401)

    # Use username for authentication since we're using default backend
    user = authenticate(request, username=user_obj.username, password=password)

    if user is not None:
        return Response({'message': 'Login successful'}, status=200)
    else:
        return Response({'error': 'Invalid credentials'}, status=401)