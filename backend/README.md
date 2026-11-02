# When you change a model (e.g., add a new model):
alembic revision --autogenerate -m "create initial users and roles tables"
alembic upgrade head


# Usefull alembic command
alembic current
alembic history

# When you set up a fresh database (or reset it):
alembic upgrade head      # Creates the schema