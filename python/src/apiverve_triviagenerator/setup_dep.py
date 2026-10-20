from setuptools import setup, find_packages

setup(
    name='apiverve_triviagenerator',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Trivia Generator is a trivia and quiz API that serves random trivia questions complete with multiple-choice options and the correct answer. Paid plans can filter questions across topics like history, science, geography, and pop culture.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/trivia?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
