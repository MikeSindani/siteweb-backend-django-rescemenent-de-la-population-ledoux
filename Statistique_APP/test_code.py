


class User:

    def __init__(self, name:str, email:str, password:str):
        self.name = name
        self.email = email
        self.password = password
        self.friends = []
        self.family = []
        self.groups = []
        self.posts = []
        self.messages = []

    def add_friend(self, user):
        self.friends.append(user)

    def add_family_member(self, user):
        self.family.append(user)

    def create_group(self, name, members):
        group = Group(name, members)
        self.groups.append(group)

    def create_post(self, content):
        post = Post(content, self)
        self.posts.append(post)

    def send_message(self, recipient, content):
        message = Message(content, self, recipient)
        self.messages.append(message)
    def display_profile(self):
        print(f"Name: {self.name}")
        print(f"Email: {self.email}")
        print(f"Password: {self.password}")
        print(f"Friends: {[friend for friend in self.friends]}")
        print(f"Family: {[member for member in self.family]}")
        print(f"Groups: {[group for group in self.groups]}")
        print(f"Posts: {[post for post in self.posts]}")
        print(f"Messages: {[message for message in self.messages]}")


class Group:
    def __init__(self, name, members):
        self.name = name
        self.members = members
        self.posts = []

    def create_post(self, content, user):
        post = Post(content, user)
        self.posts.append(post)


class Post:
    def __init__(self, content, user):
        self.content = content
        self.user = user


class Message:
    def __init__(self, content, sender, recipient):
        self.content = content
        self.sender = sender
        self.recipient = recipient


nom = input("Entre prenom :")
email = input("Entre email :")
password = input("entre password :")
name__menbre__family = input("entre un membre de famile :")
user = User(nom, email,password) 
user.add_family_member(name__menbre__family)
user.display_profile()