"""empty message

Revision ID: d7f7da833d74
Revises: 444c9de37fb8
Create Date: 2024-08-26 15:03:35.035491

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd7f7da833d74'
down_revision = '444c9de37fb8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('wines', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('wines', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.VARCHAR(), nullable=True))

    # ### end Alembic commands ###
