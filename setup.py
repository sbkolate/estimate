from setuptools import setup, find_packages
import os

version = '0.0.1'

setup(
    name='estimate',
    version=version,
    description='Estimate is an Open Source web based Budget Cost Estimating Software designed for medium and small companies. Features include Management of Analysis of Rates, Project Estimation,Cost Sheet preparation, BOQ Generation.',
    author='Systematrix',
    author_email='kolate.sambhaji@gmail.com',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=("frappe",),
)
